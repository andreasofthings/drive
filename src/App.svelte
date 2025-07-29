<script>
    import "@googleworkspace/drive-picker-element";

    // see https://svelte.dev/docs/svelte/v5-migration-guide#Event-changes
    function handler(e) {
        console.log(e);
    }
</script>

<main>
    <drive-picker
        client-id={"675807958095-nsptdcn5qdb6pl44cge1c6ghact9t5q0.apps.googleusercontent.com"}
        app-id={"675807958095"}
        origin={"https://codesandbox.io"}
        on:picker:canceled={handler}
        on:picker:error={handler}
        on:picker:oauth:error={handler}
        on:picker:oauth:response={handler}
        on:picker:picked={handler}
    ></drive-picker>
</main>
