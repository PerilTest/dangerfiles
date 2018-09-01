import spellcheck from 'danger-plugin-spellcheck'
import {warn} from "danger"

warn("This looks like a great PR")
schedule(spellcheck({ settings: "artsy/artsy-danger@spellcheck.json" }))
