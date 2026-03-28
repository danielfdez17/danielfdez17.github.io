
.PHONY: help build dev install lint clean fclean deps

BLUE := \033[0;34m
GREEN := \033[0;32m
YELLOW := \033[0;33m
RESET := \033[0m

# ? 🔨 Build the portfolio
build: deps
	@echo "$(BLUE)[build]$(RESET) Building portfolio..."
	pnpm run build

# ? 🛠️  Install dependencies
install: 
	@echo "$(BLUE)[install]$(RESET) Installing portfolio dependencies..."
	pnpm install

# ? 💻 Start development server (portfolio only)
dev:
	@echo "$(BLUE)[dev]$(RESET) Starting development server..."
	pnpm run dev

# ? 🧹 Clean build artifacts
clean:
	@echo "$(BLUE)[clean]$(RESET) Cleaning portfolio build..."
	rm -rf dist/

# ? 🗑️  Complete clean (includes node_modules)
fclean: clean
	@echo "$(BLUE)[fclean]$(RESET) Removing dependencies..."
	rm -rf node_modules pnpm-lock.yaml

# ? ✅ Lint code
lint:
	@echo "$(BLUE)[lint]$(RESET) Linting portfolio..."
	pnpm run lint

# ? 📋 Check dependencies
deps:
	@if [ ! -d "node_modules" ]; then \
		echo "$(YELLOW)[deps]$(RESET) Installing portfolio dependencies..."; \
		pnpm install; \
	else \
		echo "$(GREEN)[deps]$(RESET) Portfolio dependencies already installed"; \
	fi

# ? ❓ Displays this help message
help:
	@awk '\
		BEGIN { blue = "\033[0;34m"; green = "\033[0;32m"; reset = "\033[0m"; yellow = "\033[0;33m"; print yellow "Usage: make [target]"; print "Targets:" } \
		/^# \?/ { desc = substr($$0, 5); next } \
		/^$$/ { desc = ""; next } \
		/^[a-zA-Z0-9][a-zA-Z0-9_.-]*:/ { \
			target = $$1; \
			sub(/:.*/, "", target); \
			if (target !~ /^\./) \
				printf "  " blue "%-12s" reset green "%s" reset "\n", target, desc; \
			desc = ""; \
		}' $(firstword $(MAKEFILE_LIST));
