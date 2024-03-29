import * as admin from "firebase-admin";
import { getApps } from "firebase-admin/app";

if (!getApps().length) {
  admin.initializeApp({
    credential: admin.credential.cert(
      JSON.parse(`${process.env.FIREBASE_SERVICE_ACCOUNT_KEY}`)
    ),
  });
}

const adminDb = admin.firestore();

export { adminDb };
