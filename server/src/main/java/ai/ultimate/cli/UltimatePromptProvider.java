package ai.ultimate.cli;

import org.jline.utils.AttributedString;
import org.jspecify.annotations.NonNull;
import org.springframework.shell.jline.PromptProvider;
import org.springframework.stereotype.Component;

/**
 * Customizes the Spring Shell prompt.
 * Changes default "shell:>" to "Ultimate:>"
 *
 * PromptProvider is the official Spring Shell 4.0
 * interface for prompt customization.
 */
@Component
public class UltimatePromptProvider
        implements PromptProvider {

    @Override
    public @NonNull AttributedString getPrompt() {
        return new AttributedString("Ultimate:> ");
    }
}