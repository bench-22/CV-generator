import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {Auth, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, UserCredential} from '@angular/fire/auth';
import {doc, getDoc, getFirestore} from '@angular/fire/firestore';
import {getDownloadURL, getStorage, ref} from '@angular/fire/storage';
import {browserSessionPersistence, onAuthStateChanged, setPersistence, User} from 'firebase/auth';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private _router: Router,
    private auth: Auth,
  ) {
    setPersistence(auth, browserSessionPersistence).catch(err => console.log(err))
  }

  signIn(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.auth, email, password).then(async (cred) => {
      sessionStorage.setItem('token', await cred.user.getIdToken())
      return cred
    })
  }

  loadUrlImage(uid?: any): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const docRef = doc(getFirestore(), 'users', uid);
      const docSnap = getDoc(docRef);
      docSnap.then(async (document) => {
        if (document.exists()) {
          const url: any = document.data();
          if (url.photoURL) {
            const imgRef = ref(getStorage(), url.photoURL);
            const downloadURL = await getDownloadURL(imgRef);
            sessionStorage.setItem('imageURL', downloadURL || 'assets/images/mentor.png');
            // this.jwtAuthService.image$.next(downloadURL.toString() || 'assets/images/mentor.png');
            resolve(true)
          } else {
            sessionStorage.setItem('imageURL', 'assets/images/mentor.png');
            // this.jwtAuthService.image$.next('assets/images/mentor.png');
            resolve(true)
          }
        } else {
          sessionStorage.setItem('imageURL', 'assets/images/mentor.png');
          // this.jwtAuthService.image$.next('assets/images/mentor.png');
          resolve(true)
        }
      });
    })
  }

  getDocsFromFireStorage(url: string): Promise<any> {
    const imgRef = ref(getStorage(), url);
    return getDownloadURL(imgRef);
  }

  getCurrentTokenExist(): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      const user = this.auth.currentUser;
      if (user === null) {
        reject(false);
      } else {
        const tokenReset = await user.getIdToken();
        if (tokenReset) {
          resolve(true);
        }
      }
    })
  }

  getToken(): Promise<string> {
    return new Promise((resolve, reject) => {
      onAuthStateChanged(this.auth, (user) => {
        if (user) {
          user.getIdToken().then(token => {
            sessionStorage.setItem('token', token);
            resolve(token);
          }, err => reject(err))
        } else {
          resolve('');
        }
      }, err => reject(err));
    });
  }

  // getUserFirebaseRol(): Promise<boolean> {  }

  updateTokenAsd(): Observable<any> {
    return new Observable(obs => {
      const {auth} = this;
      auth.currentUser?.getIdToken(false)
        .then(token => {
          obs.next(token)
          obs.complete()
        })
        .catch(() => obs.error())
    })

  }

  passwordRecover(passwordResetEmail: string) {
    return sendPasswordResetEmail(this.auth, passwordResetEmail);
  }

  isLoggedIn(): Promise<User> {
    return new Promise((resolve, reject) => {
      onAuthStateChanged(this.auth, (user) => {
        if (user) {
          resolve(user)
        }
        reject(null)
      }, err => reject(err));
    });
  }

  // isEmailVerified(): Promise<boolean> {
  //   const user = this.auth.currentUser;
  //   return new Promise((resolve, reject) => {
  //     resolve(user && user.emailVerified);
  //   });
  // }

  // signOut(navigate = true): void {
  //   signOut(this.auth).then(() => {
  //     sessionStorage.clear()
  //     this.sessionService.clearAll()
  //     navigate && this.router.navigate(['/sessions/signin'])
  //   })
  // }
}
