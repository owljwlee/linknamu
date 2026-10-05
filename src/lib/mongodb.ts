import { MongoClient, type Collection } from "mongodb";

type ClickDoc = { _id: string; count: number };

const uri = process.env.MONGODB_URI;

// 개발 중 핫 리로드 때마다 연결이 새로 생기지 않도록 전역에 보관합니다.
const globalForMongo = globalThis as unknown as {
  _mongoClientPromise?: Promise<MongoClient>;
};

function getClient(): Promise<MongoClient> {
  if (!uri) {
    throw new Error("MONGODB_URI 환경 변수가 설정되지 않았습니다.");
  }
  // 연결에 실패하면 캐시를 비워 다음 요청에서 다시 시도합니다.
  globalForMongo._mongoClientPromise ??= new MongoClient(uri)
    .connect()
    .catch((error) => {
      globalForMongo._mongoClientPromise = undefined;
      throw error;
    });
  return globalForMongo._mongoClientPromise;
}

export async function getClicksCollection(): Promise<Collection<ClickDoc>> {
  const client = await getClient();
  return client.db("linknamu").collection<ClickDoc>("clicks");
}
