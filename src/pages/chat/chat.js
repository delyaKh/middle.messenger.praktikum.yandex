
function getClassNameMessage(type, content)
{
    console.log(content);
    const className = type === "request" ? "request" : "response";
    const tmpl = '<div class="{{className}}">{{ content }}</div>';
    const result = templator(tmpl)({className: className, content: content});
    const block = result();
    document.body.appendChild(block);
}

    export default getClassNameMessage();



