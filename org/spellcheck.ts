import spellcheck from 'danger-plugin-spellcheck'
import {warning} from "danger"

warning("This looks like a great PR")
schedule(spellcheck({ settings: "artsy/artsy-danger@spellcheck.json" }))
