// Adds the permissions the game needs to the generated Android manifest.
// Run after `npx cap add android` (the workflow does this for you).
import fs from "node:fs";
const p = "android/app/src/main/AndroidManifest.xml";
let x = fs.readFileSync(p, "utf8");
const want = [
  "android.permission.INTERNET",
  "android.permission.RECORD_AUDIO",
  "android.permission.MODIFY_AUDIO_SETTINGS",
];
for (const perm of want) {
  if (!x.includes(`"${perm}"`)) {
    x = x.replace("</manifest>", `    <uses-permission android:name="${perm}" />\n</manifest>`);
  }
}
if (!x.includes('android.hardware.microphone')) {
  x = x.replace("</manifest>", `    <uses-feature android:name="android.hardware.microphone" android:required="false" />\n</manifest>`);
}
fs.writeFileSync(p, x);
console.log("Patched", p);
