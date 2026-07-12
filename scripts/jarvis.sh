#!/bin/bash
# Ultimate AI Platform Launcher for Linux/Mac
# Enterprise-grade engine launcher

ULTIMATE_DIR="$(dirname "$0")"
# আপনার নতুন বিল্ড করা জার ফাইলের নাম অনুযায়ী এখানে আপডেট করে নিন
JAR="$ULTIMATE_DIR/ultimate-server-1.0.0.jar"

if [ ! -f "$JAR" ]; then
    echo ""
    echo "[ERROR] UltimateAI binary not found: ultimate-server-1.0.0.jar"
    echo "Ensure the executable jar is present in the platform root."
    exit 1
fi

echo "Initializing UltimateAI Engine Subsystem..."

# -Djline.terminal=unix ensures proper terminal handling for Unix-based systems
java \
  -Djline.terminal=unix \
  -jar "$JAR" "$@"
  
