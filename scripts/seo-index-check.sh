#!/usr/bin/env bash
set -euo pipefail

SITE_URL="${1:-https://cloverbloom.co}"

bold() { printf "\033[1m%s\033[0m\n" "$1"; }
ok() { printf "✅ %s\n" "$1"; }
warn() { printf "⚠️  %s\n" "$1"; }
fail() { printf "❌ %s\n" "$1"; exit 1; }

check_status_200() {
  local url="$1"
  local code
  code="$(curl -sS -o /dev/null -w "%{http_code}" "$url")"
  if [[ "$code" == "200" ]]; then
    ok "$url returns 200"
  else
    fail "$url returned $code (expected 200)"
  fi
}

check_contains() {
  local url="$1"
  local pattern="$2"
  local label="$3"
  if curl -sS "$url" | grep -Eiq "$pattern"; then
    ok "$label present at $url"
  else
    fail "$label missing at $url"
  fi
}

check_not_contains() {
  local url="$1"
  local pattern="$2"
  local label="$3"
  if curl -sS "$url" | grep -Eiq "$pattern"; then
    fail "$label found at $url"
  else
    ok "$label not found at $url"
  fi
}

bold "SEO Indexing Check for $SITE_URL"

check_status_200 "$SITE_URL/"
check_status_200 "$SITE_URL/robots.txt"
check_status_200 "$SITE_URL/sitemap.xml"
check_status_200 "$SITE_URL/airbnb-co-hosting"
check_status_200 "$SITE_URL/airbnb-management-san-diego"

check_contains "$SITE_URL/robots.txt" "Sitemap:\s*${SITE_URL}/sitemap\.xml" "Sitemap reference"
check_contains "$SITE_URL/sitemap.xml" "<loc>${SITE_URL}/</loc>" "Homepage in sitemap"
check_contains "$SITE_URL/sitemap.xml" "<loc>${SITE_URL}/airbnb-co-hosting/?</loc>" "Co-hosting page in sitemap"
check_contains "$SITE_URL/sitemap.xml" "<loc>${SITE_URL}/airbnb-management-san-diego/?</loc>" "San Diego page in sitemap"

check_not_contains "$SITE_URL/" 'name="robots" content="noindex"' "noindex meta tag on homepage"
check_contains "$SITE_URL/" 'rel="canonical"' "Canonical tag on homepage"
check_contains "$SITE_URL/" 'application/ld\+json' "JSON-LD structured data"

ok "All core indexing checks passed"
echo
echo "Next manual step (required):"
echo "1) Open Google Search Console"
echo "2) Submit: ${SITE_URL}/sitemap.xml"
echo "3) Request indexing for: /, /airbnb-co-hosting, /airbnb-management-san-diego"
