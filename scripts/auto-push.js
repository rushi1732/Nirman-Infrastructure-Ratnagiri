import { execSync } from "child_process"

console.log("==========================================")
console.log("🚀 Git Auto-Push Watcher is Running...")
console.log("Repository: origin/main")
console.log("Auto-checking for file changes every 15 seconds...")
console.log("==========================================\n")

function autoSync() {
  try {
    const status = execSync("git status --porcelain", { encoding: "utf-8" }).trim()
    if (status) {
      const now = new Date()
      const timeString = now.toLocaleDateString("en-IN") + " " + now.toLocaleTimeString("en-IN")
      console.log(`\n[${timeString}] 📦 Changes detected:`)
      console.log(status)
      
      console.log("⏳ Staging files (git add .)...")
      execSync("git add .", { stdio: "inherit" })
      
      console.log("📝 Creating commit...")
      execSync(`git commit -m "Auto update: ${timeString}"`, { stdio: "inherit" })
      
      console.log("⬆️ Pushing to GitHub (origin/main)...")
      execSync("git push origin main", { stdio: "inherit" })
      
      console.log(`✅ [${timeString}] Successfully pushed to GitHub! Still watching...\n`)
    }
  } catch (error) {
    console.error("⚠️ Notice during auto-push:", error.message)
  }
}

// Initial check
autoSync()

// Loop every 15 seconds
setInterval(autoSync, 15000)
