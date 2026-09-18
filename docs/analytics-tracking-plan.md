# Google Analytics and Google Tag Manager Tracking Plan

This website uses a consent-first Google Tag Manager setup. The GTM container is not loaded until a visitor accepts analytics cookies in the cookie banner.

## Before UNIDO Launch

The code currently uses this temporary placeholder:

```text
PUBLIC_GTM_ID=GTM-XXXXXXX
```

The placeholder does not load Google Tag Manager. When the UNIDO-owned GTM container is ready, set `PUBLIC_GTM_ID` to the real container id in the GitHub Actions or hosting environment.

The expected production URL is:

```text
https://www.unido.org/circular-economy-tools
```

## Consent Setup

- The banner text is editable in `src/lib/content/editable/global/cookie-consent.js`.
- The consent and data layer helper is in `src/lib/analytics.js`.
- Analytics consent is stored in the visitor's browser as `ce-toolbox-analytics-consent`.
- Basic Consent Mode is used: GTM is blocked until analytics consent is accepted.

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
| `form_link_click` | `form_link_click` | `form_type`, `form_title`, `link_url` | Which Contact page forms visitors open, for example feedback or experience/certificate nomination. |

## GTM Notes

- Keep the GTM container minimal. For launch, it should only contain GA4 analytics tags unless UNIDO explicitly approves other tags.
- Do not add tags that collect personal data.
- Do not send form contents, email addresses, names, or certificate-related personal information to GA4.
- If the GA4 Google tag sends automatic page views, avoid duplicate page view reporting by either disabling automatic page views in the tag configuration or using `ce_page_view` consistently as the page view trigger.
