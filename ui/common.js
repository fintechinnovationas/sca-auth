'use strict';

function handle_auth_issues(res) {
    if(res.data.code) {
        var path = "#/"+res.data.code;
        if(res.data.sub) {
            path += '?sub='+encodeURIComponent(res.data.sub);
        }
        return path;
    }
}