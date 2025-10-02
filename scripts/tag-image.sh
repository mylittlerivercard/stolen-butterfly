#!/usr/bin/env bash
set -euo pipefail

IMG_PATH=${1:-}

if [[ -z "${IMG_PATH}" ]]; then
  echo "Usage: bash scripts/tag-image.sh <image.jpg>" >&2
  exit 1
fi

if [[ ! -f "${IMG_PATH}" ]]; then
  echo "Error: file not found: ${IMG_PATH}" >&2
  exit 1
fi

if ! command -v exiftool >/dev/null 2>&1; then
  echo "Error: exiftool is not installed. Please install it first." >&2
  echo "- macOS: brew install exiftool" >&2
  echo "- Ubuntu/Debian: sudo apt-get install exiftool" >&2
  echo "- Windows: download from https://exiftool.org/" >&2
  exit 1
fi

TITLE="Damien Hirst — Red Butterfly (2009)"
ARTIST="Damien Hirst"
DESC=$'Œuvre volée : Damien Hirst — Red Butterfly (2009). Dimensions 73,5 × 86 cm avec cadre. Technique : acrylique sur papier. Réalisée pour \u0027Requiem\u0027 au PinchukArtCentre en avril 2009. Volée le 14/12/2023 à Luxembourg. N° de plainte : PN-XXXXX. Contact : cyril@mlrcoin.com'
RIGHTS=$'Propriété privée — signalée volée'

echo "Tagging metadata on ${IMG_PATH}..."

exiftool -overwrite_original -charset UTF8 \
  -XMP-dc:Title="${TITLE}" \
  -XMP-dc:Title-fr="${TITLE}" \
  -XMP-dc:Title-x-default="${TITLE}" \
  -XMP-dc:Creator="${ARTIST}" \
  -Artist="${ARTIST}" \
  -IPTC:By-line="${ARTIST}" \
  -XMP-dc:Description="${DESC}" \
  -XMP-dc:Description-fr="${DESC}" \
  -IPTC:Headline="Red Butterfly (2009) — Œuvre volée" \
  -IPTC:Caption-Abstract="Œuvre volée : Damien Hirst — Red Butterfly (2009). Luxembourg, 14/12/2023. N° de plainte : PN-XXXXX. Contact : cyril@mlrcoin.com" \
  -XMP-dc:Rights="${RIGHTS}" \
  -IPTC:CopyrightNotice="${RIGHTS}" \
  -Copyright="${RIGHTS}" \
  -XMP-xmpRights:Marked=True \
  -XMP-photoshop:Credit="MLR Onchain Labs" \
  -XMP-photoshop:Source="Collection privée" \
  -IPTC:Keywords+="Damien Hirst" \
  -IPTC:Keywords+="Red Butterfly" \
  -IPTC:Keywords+="Papillon" \
  -IPTC:Keywords+="2009" \
  -IPTC:Keywords+="Requiem" \
  -IPTC:Keywords+="PinchukArtCentre" \
  -IPTC:Keywords+="Luxembourg" \
  -IPTC:Keywords+="œuvre volée" \
  -IPTC:Keywords+="stolen art" \
  -IPTC:Keywords+="art theft" \
  -XMP-dc:Subject+="Damien Hirst" \
  -XMP-dc:Subject+="Red Butterfly" \
  -XMP-dc:Subject+="Papillon" \
  -XMP-dc:Subject+="Requiem" \
  -XMP-dc:Subject+="PinchukArtCentre" \
  -XMP-dc:Subject+="Luxembourg" \
  -XMP-dc:Subject+="œuvre volée" \
  -XMP-dc:Subject+="stolen art" \
  -GPS:all= -thumbnailimage= \
  "${IMG_PATH}" >/dev/null

echo "Metadata written. Verifying…"
exiftool -G1 -a -s \
  -Title -XMP-dc:Title -Description -XMP-dc:Description \
  -Artist -Creator -Rights -Copyright \
  -Headline -Caption-Abstract -Keywords -Subject \
  "${IMG_PATH}"

echo "Done."

