import farawin from "farawin";
import { useState } from "react";

export const contact = await farawin.getContacts()

export const msg = await farawin.getChats()

// export default result.contactList