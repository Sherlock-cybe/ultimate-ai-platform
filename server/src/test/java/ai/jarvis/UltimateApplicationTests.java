package ai.ultimate;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;

@SpringBootTest
@TestPropertySource(properties = {
        // ── Security ────────────────────────────────
        "Ultimate.security.jwt.secret="
                + "test-secret-key-minimum-32-characters"
                + "-long-enough-for-jwt-hmac-sha256",

        // ── Shell ────────────────────────────────────
        // Disable interactive shell in tests
        "spring.shell.interactive.enabled=false",

        // ── Gemini — CORRECT property name ───────────
        // FIX: was "spring.ai.google.api-key="
        // must match application.yml exclusion key
        "spring.ai.google.genai.api-key=",

        // ── Database ─────────────────────────────────
        "spring.flyway.enabled=false",
        "spring.r2dbc.url="
                + "r2dbc:postgresql://localhost:5433/Ultimate",
        "spring.datasource.url="
                + "jdbc:postgresql://localhost:5433/Ultimate",
        "spring.datasource.username=Ultimate",
        "spring.datasource.password=Ultimate",
        "spring.flyway.url="
                + "jdbc:postgresql://localhost:5433/Ultimate",
        "spring.flyway.user=Ultimate",
        "spring.flyway.password=Ultimate",

        // ── Redis ─────────────────────────────────────
        "spring.data.redis.host=localhost",
        "spring.data.redis.port=6379",

        // ── pgvector ──────────────────────────────────
        "spring.ai.vectorstore.pgvector"
                + ".initialize-schema=false"
})
class UltimateApplicationTests {

    @Test
    void contextLoads() {
        // Requires: docker-compose up -d
        // PostgreSQL on port 5433
        // Redis on port 6379
        // Flyway disabled - migrations skipped for speed
        // R2DBC pool still requires PostgreSQL connection
    }
}
