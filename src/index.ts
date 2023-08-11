const FULL_BOX_ASK_AI_ENDPOINT = 'https://api.box.com/2.0/ai/ask';

interface DialogHistoryItem {
    prompt: string,
    answer: string,
    created_at: string
}

interface BoxItem {
    id: string,
    type: 'file' | 'folder' | 'hub', // only file is currently supported. folder and hub not supported as of 8/11/
    content?: string
}

interface BoxAIAPIRequest {
    mode: string,
    prompt: string
    items: Array<BoxItem>,
    dialog_history: Array<DialogHistoryItem>,
    config: {
        is_streamed: boolean
    }
}

const PROMPT = "what is the purpose?"

export async function callBoxAI(boxAIRequest: BoxAIAPIRequest, asUserId: string, accessToken: string) {
    const response = await fetch(FULL_BOX_ASK_AI_ENDPOINT, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
            'As-User': asUserId
        },
        body: JSON.stringify(boxAIRequest),
        
    })
    console.log(await response.json());
}

export async function main() {
    if (process.argv.length != 6) {

        console.log("Usage: ts-node index.ts <accessToken> <asUserId> <requestType> <fileId>");
        process.exit(1);
    }

    const accessToken = process.argv[2];  // The first user-supplied argument
    const asUserId = process.argv[3];  // The second user-supplied argument
    const requestType = process.argv[4];  // The third user-supplied argument
    const fileId = process.argv[5];  // The third user-supplied argument


    const aiRequest: BoxAIAPIRequest = {
        mode: requestType,
        items: [
            {id: fileId, type: 'file'}
        ],
        dialog_history: [],
        config: {
            is_streamed: false
        },
        prompt: PROMPT
    }

    const response = await callBoxAI(aiRequest, asUserId, accessToken);

}

main()
