var API_URL = 'http://api.propertysolutions.com.br';


function getNews() {
    var url = API_URL + '/api/contents';

    $.ajaxSetup({
        headers:{
            'Access-Control-Allow-Headers': '*',
            'Accept': '*',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjZiZjlmYTJlNzQ2ZDg5ZjZhZTM0NGYwMzcwYjg1NzUxZThlNTU2MWYyYWQ4MTZlMWNkYTFmYTA0NTRhNDg0MTVjZjYxZGM2ZGJmMjJlODNmIn0.eyJhdWQiOiIyIiwianRpIjoiNmJmOWZhMmU3NDZkODlmNmFlMzQ0ZjAzNzBiODU3NTFlOGU1NTYxZjJhZDgxNmUxY2RhMWZhMDQ1NGE0ODQxNWNmNjFkYzZkYmYyMmU4M2YiLCJpYXQiOjE1NDA0MDc4OTAsIm5iZiI6MTU0MDQwNzg5MCwiZXhwIjoxNTcxOTQzODkwLCJzdWIiOiIyIiwic2NvcGVzIjpbIioiXX0.PtcsnHFw_nQCopQkzAZYF9OrRxPdHAqczZ-4sDAx20MB9a067szsKl7JokL4WpsrnZ0n9VuFymyGBI4-MVTKSiuNdGRuIDjEumUXgIDKDxXi0x801CRBSGQ6ZfPcaTwCbVILQwKeAMS9n7jgI0aSv1gur2qXAhv-ivYp4qT0tmcAcBTKk7Dl3mNB4b-tjT-576F2JARwUQfsLNEws0mopvZhcJrSOrPZZU_rK-Ay8-60LS968cnlBMFYfs5nOM-YIoz2eL9rXJw-504krqiPy0NhrH08oLE1e9lDBt038FPAPK_pWbgaC2eofZQF22AlCFYktMh9D2xTZzEKaRBvFTXEFR0A_Z_QUg5lpII5x1EGvs2mIhGIg3hcJsfYJaszhVPwvGmifmaHndveEtxPBAhxFgfrlkF1uYfTwCUhG8b12uKhkLjMxmdMH5Q1G1ExrpfrLmYKEtbaPD6u2SRS6nrTSwjkUtWLlu6OD6Wbqk6tX2QtZmpcgz7_fHSowpKbuLcvkLW3P_Kki0ORCHWgUsZ0eh1SqJfyXBzluh5ZsuAXHb1muhGp2Aw2bqQEnZSY-Kdbj8ntP3_fapwJPTUiPgb1b9o6fNfCbbosZgP14oZb4GDGghNouQG6kziwweRYrNJJ_VrRfWrKbbQDcf428x3rI7GxWQB_pRQJ7I2r-kQ',
            'Content-Type': 'application/json'
        }
     });

    $.get(url, function(data) {
        console.log('data', data);
    })

}


$(document).ready(function () {
    getNews();
});