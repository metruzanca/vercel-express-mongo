# Changelog

## [0.1.3] - 2023-02-23
### Added
Added morgan for simple request logging

## [0.1.2] - 2023-02-22

### Added
Added a vercel.json which, as it turns out, is required for custom routes.

## [0.1.1] - 2023-02-21

### Added
Added mongoose to the package json to include mongoose usage examples (but commented out).

Added `api/db/seed.js` as a separate script that can be run both locally and on prod via build script option.

Added some docs inside .github/issues for common problems.

### Changed
Docs now tell you to use mongodb atlas DATABASE_URL only for production, since the GA wifi causes issues.
The docs now tell you to add a localhost db uri for development.

## [0.1.0] - 2023-02-19
Guides for:
- Setting up expressjs on vercel
- Setting up mongodb atlas and configuring environment variables to work with express/vercel

