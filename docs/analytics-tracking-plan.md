# Google Analytics and Google Tag Manager Tracking Plan

This website uses a consent-first Google Tag Manager setup. The GTM container is not loaded until a visitor accepts analytics cookies in the cookie banner.

## GTM Container Configuration

The default container in `src/lib/analytics.js` is the project's GTM container:

```text
PUBLIC_GTM_ID=GTM-WLH5LPL4
```

The default is used when `PUBLIC_GTM_ID` is not supplied or is empty. A build-time
`PUBLIC_GTM_ID` overrides it, allowing Norion's site to use a separate test
container. An explicit `PUBLIC_GTM_ID=GTM-XXXXXXX` disables the GTM loader. Changing
this environment variable requires rebuilding and deploying the static site.

Use a GTM container ID (`GTM-...`) here. The GA4 Measurement ID `G-LQFWNESSZ0`
belongs in the Google Analytics tags inside GTM. Do not add a second, direct
`gtag.js` installation to the website.

The expected production URL is:

```text
https://www.unido.org/circular-economy-tools
```

## Consent Setup

- The banner text is editable in `src/lib/content/editable/global/cookie-consent.js`.
- The consent and data layer helper is in `src/lib/analytics.js`.
- Analytics consent is stored in the visitor's browser as `ce-toolbox-analytics-consent`.
- Basic Consent Mode is used: GTM is blocked until analytics consent is accepted.
- Withdrawing consent saves the rejected choice and refreshes any open toolbox tab that has already loaded GTM. A full refresh unloads Google's running scripts, including automatic measurement; a denied Consent Mode update alone can still allow cookieless pings. Requests already sent while consent was granted cannot be recalled.
- Consent changes are applied across tabs on the same origin through browser storage events. Returning to a suspended tab also rechecks the saved preference. Visitors with a saved choice only see the banner again when they open Cookie settings (or clear the preference).
- In every GTM analytics tag, require the additional consent `analytics_storage` under Advanced Settings > Consent Settings. Advertising consent remains denied; do not require advertising consent for these analytics tags.

## GTM Configuration Summary

In Google Tag Manager, create custom event triggers for the website events listed below. Connect those triggers to GA4 event tags.

Use GA4 Enhanced Measurement for standard traffic and engagement events:

```text
first_visit
session_start
scroll
click
file_download
user_engagement
```

For page views with content groups, use the custom `ce_page_view` data layer event and send it to GA4 as `page_view`.

## Website Data Layer Events

| Website event | Recommended GA4 event name | Key parameters | What it tells |
| --- | --- | --- | --- |
| `ce_page_view` | `page_view` | `page_location`, `page_path`, `page_title`, `language`, `content_group`, `content_id` | Which parts of the toolbox are viewed. `content_group` rolls detailed pages into Journey phase, Sector guide, Tool, Case, or Static page. |
| `select_content` with `content_type: journey_phase_card` | `select_content` | `content_type`, `content_id`, `item_name`, `source_area` | Which SME journey phase cards visitors choose. |
| `select_content` with `content_type: sector_card` | `select_content` | `content_type`, `content_id`, `item_name`, `source_area` | Which sector guide cards visitors choose. |
| `select_content` with `content_type: journey_phase_diagram_step` | `select_content` | `content_type`, `content_id`, `item_name`, `source_area` | Which phase visitors open in the interactive SME journey diagram. |
| `select_content` with `content_type: journey_phase_link` | `select_content` | `content_type`, `content_id`, `item_name`, `source_area` | Which phase links visitors follow from the interactive SME journey diagram. |
| `select_content` with `content_type: next_phase` | `select_content` | `content_type`, `content_id`, `item_name`, `source_area`, `source_phase`, `target_phase` | Whether visitors continue through the SME journey sequence after completing a phase checklist. |
| `select_content` with `content_type: tool_card` | `select_content` | `content_type`, `content_id`, `item_name`, `source_area` | Which tool cards visitors open from the catalogue or embedded relevant-tools sections. |
| `tool_open` | `tool_open` | `tool_slug`, `tool_title`, `link_url`, `link_type` | Which external tool links visitors open from individual tool pages. |
| `tool_download` | `tool_download` | `tool_slug`, `tool_title`, `link_url`, `link_type` | Which directly downloadable tools visitors take from individual tool pages. Enhanced Measurement may also register `file_download`. |
| `select_content` with `content_type: case_card` | `select_content` | `content_type`, `content_id`, `item_name`, `source_area` | Which case cards visitors open from the case catalogue or embedded case sections. |
| `case_source_click` | `case_source_click` | `case_slug`, `case_title`, `link_url` | Whether visitors click through from a case page to the company's source/site. Enhanced Measurement may also register this as an outbound `click`. |
| `form_link_click` | `form_link_click` | `form_type`, `form_title`, `link_url` | Opens of the combined Contact page form, with `form_type: feedback_and_contributions`. An empty form URL does not send an event. |

## GTM Notes

- Keep the GTM container minimal. For launch, it should only contain GA4 analytics tags unless UNIDO explicitly approves other tags.
- Do not add tags that collect personal data.
- Do not send form contents, email addresses, names, or certificate-related personal information to GA4.
- Use `ce_page_view` consistently as the page view trigger: set `send_page_view` to `false` on the base Google Analytics tag and disable browser-history page views in the GA4 stream's Enhanced Measurement settings.
