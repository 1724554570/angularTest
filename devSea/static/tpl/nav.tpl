<!--{*导航栏*}-->
<ul class="navlist" id="navlist"></ul>
<script type="text/html" id="navigation">
    {{each defs as def i}}
    <li class="df">
        {{if def.ck == nhref }}
        <a href="{{def.href}}" class="isOn">{{def.text}}----{{nhref}}</a>
        {{else}}
        <a href="{{def.href}}" class="">{{def.text}}</a>
        {{/if}}
    </li>
    {{/each}}
</script>