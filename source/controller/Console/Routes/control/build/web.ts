import Terminal from "@/Tools/Console/Terminal"
import Navigator from "@/Tools/Navigator"
import app from "@/Models/Config/package"

/*
|-----------------------------
|  Web builder
|-----------------------------
|
|
*/
export default async function () {

    // Open terminal
    const terminal = new Terminal

    // Print title
    terminal.break.step("Build Extension").break

    // Source path
    const sourcePath = "source/web"

    // Distribution path
    const distPath = "dist/web"

    // Make source
    const source = new Navigator(sourcePath, { force: true })

    // Make distribution
    const distribution = new Navigator(distPath, { force: true })

    // Clear distribution
    await distribution.clear()

    // Run build command
    source.execute("npm run build", { VITE_API_VERSION: app.version })

    // Move dist
    await source.go("dist").move(distPath)
}