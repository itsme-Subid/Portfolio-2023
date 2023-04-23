export type Message = {
  id: string;
  ip?: string | null;
  name: string;
  email: string;
  message: string;
  deviceDescription?: (string | undefined)[];
  createdAt: FirebaseApp.firestore.Timestamp;
};
