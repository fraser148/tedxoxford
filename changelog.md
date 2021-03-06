# TEDxOxford Changelog
### https://tedxoxford.co.uk

All noteable changes will be logged in this file.

Please keep this up-to-date for subsequent IT Officers.

## [1.0.0] - Initial Release - 26/07/2021

### Added
- New framework of React frontend and Node.js backend.
- Overhaul of design

## [1.1.0] - Talks Page - 09/08/2021

### Added
- Used YouTube API to list all of the talks from previous years [To be repeated each year]
- Listed these talks in the database

## [1.1.1] - Speakers - 01/10/2021

### Added
- Began to add speakers to speakers page through raw code

## [1.2.0] - 09/10/2021

### Added
- Parallax conference header to homepage.

## [1.2.1] - 12/10/2021

### Changed
- Main menu action button to buy tickets from the tickets website
- Altered Committee photos

## [1.2.2] - 14/10/2021

### Fixed
- Peculiar anomaly leading to an error on the refresh for the "/speakers" page. The route has been changed to "/speaker" which has solved the problem but I have no idea why. In the browser, when the page was refreshed, it would then append a "/" to the end leading to the url of "/speakers/" leading to a 301 redirect error as if the page was permanently moved.
- CORS issue in backend, now available to manage domains on whitelist.

## [1.2.3] - 18/10/2021

### Changed
- Switched the event to visible for G&D's Event promotion. Links to Facebook event.

## [1.2.4] - 27/10/2021

### Added
- Added in the Student Submission form that works with firebase to upload the image for the student.

## [1.3.0] - Applicant Review Area - 19/11/2021

### Added
- Major addition of applicant review with Google Signin managed by Firebase. Applicant details and videos are listed in hidden admin area.

## [1.3.1] - General Updates Ahead of Event - 06/01/2022

### Added
- FAQ Page.

## [1.3.2] - Adding a Refund Policy

### Added
- Refund Policy page added.

## [1.3.3] - Schedule Page
- Added the schedule page with dropdowns with additional speaker information. This allows a more dynamic reading that a simple pdf.