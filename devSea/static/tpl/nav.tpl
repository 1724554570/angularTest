<!--{*导航栏*}-->
<ul class="navlist" id="navlist"></ul>
<script type="text/html" id="navigation">
    {{each defs as def i}}
    <li class="df">
        {{if def.ck == nhref }}
        <a href="{{def.href}}" event-id="{{def.tpl}}" data-href="{{def.dhref}}" data-ck="{{def.ck}}" class="isOn">{{def.text}}</a>
        {{else}}
        <a href="{{def.href}}" event-id="{{def.tpl}}" data-href="{{def.dhref}}" data-ck="{{def.ck}}" class="">{{def.text}}</a>
        {{/if}}
    </li>
    {{/each}}
</script>