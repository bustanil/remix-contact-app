import {ActionFunctionArgs, redirect} from "@remix-run/node";
import {deleteContact} from "~/data";
import invariant from "tiny-invariant";

export const action = async ({ params }: ActionFunctionArgs) => {
    invariant(params.contactId, "Missing contact ID");
    await deleteContact(params.contactId);
    return redirect(`/`);
}