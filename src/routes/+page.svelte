<script>
    import { browser } from "$app/environment";
    import { onMount } from "svelte";

    // Dynamically import the web component only on the client-side
    // to prevent SSR errors. This code only runs in the browser.
    onMount(async () => {
        await import("@googleworkspace/drive-picker-element");
    });

    // --- Configuration ---
    // IMPORTANT: Replace these placeholders with your actual Google Cloud credentials.
    // You can get these from the Google Cloud Console: https://console.cloud.google.com/
    const clientId =
        "991006276312-u0edoco46hrtmelt5vvqrt8rdqcootg8.apps.googleusercontent.com";
    const appId = "YOUR_APP_IDmental-health-work";
    // Note: The API Key is used as the developer key for the picker.
    const developerKey = "YOUR_API_KEY";

    // --- Svelte Component State ---
    let selectedFiles = [];
    let pickerElement = null; // This will hold the reference to the <drive-picker> DOM element.

    /**
     * Opens the Google Drive Picker dialog.
     * The library handles authentication if no oauth-token is provided.
     */
    function openPicker() {
        if (pickerElement) {
            // To show the picker, you set its `visible` property to true.
            // The component handles the rest.
            pickerElement.visible = true;
        } else {
            console.error("Picker element not ready.");
        }
    }

    // --- Event Handlers for the <drive-picker> component ---

    /**
     * Handles the 'picker:picked' event from the component.
     * This is triggered when the user selects files and clicks the "Select" button.
     * @param {CustomEvent} event - The event containing the selected documents.
     */
    function handlePicked(event) {
        // The selected files are in the event's `detail.docs` property.
        selectedFiles = event.detail.docs;
        console.log("Files selected:", selectedFiles);
    }

    /**
     * Handles the 'picker:canceled' event.
     * This is triggered when the user closes the picker dialog without selecting anything.
     */
    function handleCanceled() {
        console.log("Picker was canceled by the user.");
        selectedFiles = [];
    }

    /**
     * Handles the 'picker:authenticated' event.
     * This event fires after a successful user authentication, providing the OAuth token.
     * @param {CustomEvent} event - The event containing the auth token.
     */
    function handleAuthenticated(event) {
        console.log(
            "User successfully authenticated. Token:",
            event.detail.token,
        );
        // You can optionally store this token for other Google API calls.
    }
</script>

<main>
    <h1>SvelteKit with Google Drive Picker Element</h1>
    <p>
        This example uses the official and much simpler
        <a
            href="https://github.com/googleworkspace/drive-picker-element"
            target="_blank"
            rel="noopener noreferrer"
        >
            @googleworkspace/drive-picker-element
        </a>.
    </p>
    <p>
        <strong>Action Required:</strong> You must replace the placeholder
        credentials in the
        <code>&lt;script&gt;</code> block with your own Google Cloud Client ID, App
        ID, and API Key.
    </p>

    {#if browser}
        <div class="drive-picker-container">
            <button
                on:click={openPicker}
                class="drive-picker-button"
                disabled={!clientId.startsWith("YOUR_") ? null : true}
            >
                Open Google Drive Picker
            </button>
            {#if clientId.startsWith("YOUR_")}
                <p style="color: red; margin-top: 8px;">
                    Button is disabled until you add your credentials.
                </p>
            {/if}

            <!--
          The drive-picker web component is configured declaratively.
          - `bind:this` gives us a reference to the element so we can call `.visible = true`.
          - Attributes like `client-id`, `multiselect`, etc., configure the picker's behavior.
          - We listen for custom events like `on:picker:picked` to get the results.
        -->
            <drive-picker
                bind:this={pickerElement}
                client-id={clientId}
                app-id={appId}
                developer-key={developerKey}
                multiselect="true"
                on:picker:picked={handlePicked}
                on:picker:canceled={handleCanceled}
                on:picker:authenticated={handleAuthenticated}
            >
                <!--
            You can nest 'view' elements to define what the user sees inside the picker.
            Here we are adding views for Docs, Images, PDFs, and Folders.
          -->
                <drive-picker-docs-view view-id="DOCS"></drive-picker-docs-view>
                <drive-picker-docs-view view-id="DOCS_IMAGES"
                ></drive-picker-docs-view>
                <drive-picker-docs-view view-id="PDFS"></drive-picker-docs-view>
                <drive-picker-docs-view
                    view-id="FOLDERS"
                    include-folders="true"
                    select-folder-enabled="true"
                ></drive-picker-docs-view>
            </drive-picker>

            {#if selectedFiles.length > 0}
                <div class="selected-files">
                    <h2>Selected Files:</h2>
                    <ul>
                        {#each selectedFiles as file}
                            <li>
                                <a
                                    href={file.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {file.name} ({file.mimeType})
                                </a>
                            </li>
                        {/each}
                    </ul>
                </div>
            {/if}
        </div>
    {/if}
</main>

<style>
    main {
        padding: 1rem;
        max-width: 1200px;
        margin: 0 auto;
        font-family:
            -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
            Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }

    .drive-picker-container {
        margin-top: 2rem;
    }

    .drive-picker-button {
        background-color: #4285f4;
        color: white;
        border: none;
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    .drive-picker-button:hover {
        background-color: #3367d6;
    }

    .drive-picker-button:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }

    .selected-files {
        margin-top: 2rem;
        padding: 1rem;
        border: 1px solid #ddd;
        border-radius: 4px;
        background-color: #f9f9f9;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        padding: 0.5rem 0;
        border-bottom: 1px solid #eee;
    }

    li:last-child {
        border-bottom: none;
    }

    a {
        text-decoration: none;
        color: #4285f4;
    }

    a:hover {
        text-decoration: underline;
    }
</style>
