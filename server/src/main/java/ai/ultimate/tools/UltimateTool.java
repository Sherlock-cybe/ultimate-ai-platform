package ai.ultimate.tools;

/**
 * Marker interface for all Ultimate tool implementations.
 *
 * USAGE:
 * Implement this interface on any class that
 * provides tools to the AI model.
 *
 * Spring AI tools use @Tool annotation on methods.
 * UltimateTool marks the class for auto-discovery
 * by ToolRegistry.
 *
 * ADDING A NEW TOOL:
 * 1. Create class implementing UltimateTool
 * 2. Add @Component
 * 3. Annotate methods with @Tool
 * 4. That's it — ToolRegistry picks it up automatically
 *
 * EXAMPLE:
 * @Component
 * public class MyTool implements UltimateTool {
 *
 *     @Tool(description = "Does something useful")
 *     public String doSomething(String input) {
 *         return "result";
 *     }
 * }
 */
public interface UltimateTool {
    // Marker interface — no methods required
    // @Tool methods defined in implementing classes
}