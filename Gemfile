source "https://rubygems.org"
gemspec

# Jekyll plugins
gem "jekyll-github-metadata", ">= 2.15"
gem "jekyll-include-cache", group: :jekyll_plugins
gem "jekyll-sitemap", group: :jekyll_plugins

# Development tools
gem "html-proofer", "~> 5.0", group: :development

# Additional dependencies to silence Ruby 3.4.0 warnings
gem "csv"                    # Required as it will no longer be part of default gems
gem "base64"                 # Required as it will no longer be part of default gems
gem "faraday-retry", group: :jekyll_plugins  # Needed for retry middleware in Faraday v2.0+
