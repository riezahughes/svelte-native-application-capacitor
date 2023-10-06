import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.nativeproject.svelte",
  appName: "sveltenative",
  webDir: "build",
  server: {
    androidScheme: "https",
  },
};

export default config;
