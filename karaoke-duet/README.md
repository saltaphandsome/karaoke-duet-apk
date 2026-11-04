# Karaoke Duet

A multiplayer karaoke game: two-part duets, live pitch scoring from your microphone, streaks and multipliers, star ratings, and a shared leaderboard. Runs in any browser and as an Android app.

## Get the APK

1. Push this repo to GitHub (branch `main`). The **Build Android APK** workflow runs automatically.
2. Open the **Actions** tab, pick the latest run, and download the `karaoke-duet-apk` artifact (a zip containing `karaoke-duet.apk`).
3. For a permanent download link, tag a release: `git tag v1.0.0 && git push --tags`. The APK is then attached to the **Releases** page.
4. On your phone, open the APK and allow "Install unknown apps" for your browser or file manager when asked.

This is a **debug-signed** APK, fine for sharing with friends. Publishing on Google Play needs a release keystore, which is not set up here.

## Playing together

- One person taps **Create a room** and shares the 4-letter code. Others tap **Join with code**.
- Anyone can press **Start for everyone**. All phones count down and play the same backing track.
- Rooms use PeerJS (peer-to-peer through a free public broker), so all players need internet. If the room creator leaves, the room ends. Some mobile or corporate networks block peer connections; a TURN server would be needed there.
- Pick **Part A**, **Part B**, or **Sing all**. Use headphones to avoid feedback.
- No mic? Hold the pitch lane to play in tap mode (worth 60% of the points).

## Run it locally

```bash
npm install
npm run prepare-www
npx serve www        # or any static file server, then open it in two browser tabs
```

## Build the APK yourself

Needs Node 22, Java 21 and the Android SDK.

```bash
npm install
npm run prepare-www
npm run android:add     # generates ./android and adds mic + internet permissions
npx cap sync android
cd android && ./gradlew assembleDebug
# APK: android/app/build/outputs/apk/debug/app-debug.apk
```

Replace the default icon with `npx @capacitor/assets generate` once you have an `assets/icon.png`.
