export type Message = {
  id: string;
  ip: string;
  name: string;
  email: string;
  message: string;
  createdAt: FirebaseApp.firestore.Timestamp;
};
