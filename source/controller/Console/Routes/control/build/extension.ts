import Terminal from "@/Tools/Console/Terminal"
import Navigator from "@/Tools/Navigator"
import app from "@/Models/Config/package"

/*
|-----------------------------
|  Extension builder
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
    const sourcePath = "source/extension"

    // Distribution path
    const distPath = "dist/extension"

    // Make source
    const source = new Navigator(sourcePath, { force: true })

    // Make distribution
    const distribution = new Navigator(distPath, { force: true })

    // Clear distribution
    await distribution.clear()

    // Run build command
    source.execute("npm run build", { VITE_API_VERSION: app.version })

    // Copy extension
    await source.go("extension").copy(distPath)

    // Move dist
    await source.back().go("dist").move(distPath)
}