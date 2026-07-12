package ai.ultimate.common.exception;

import org.springframework.http.HttpStatus;

public class AiProviderException extends UltimateException {

    public AiProviderException(String message) {
        super(
                "AI_PROVIDER_ERROR",
                message,
                HttpStatus.SERVICE_UNAVAILABLE
        );
    }
}
