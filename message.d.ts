export type Message = {
  id: string;
  ip?: string | null;
  name: string;
  email: string;
  message: string;
  createdAt: FirebaseApp.firestore.Timestamp;
};
