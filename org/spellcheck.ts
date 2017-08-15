import spellcheck from 'danger-plugin-spellcheck'

markdown(JSON.stringify(danger.git, null, "  "))

schedule(spellcheck({ settings: "artsy/artsy-danger@spellcheck.json" }))
