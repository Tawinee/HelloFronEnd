$(function () {
    $("#searchrealreal").click(function () {
        var keyword = $("#keyword").val();
        console.log(keyword)
        searchByHashtag(keyword);
    });

    function searchByHashtag(keyword) {
        $("#posts").empty();
        $.get(`https://www.instagram.com/explore/tags/${keyword}/?__a=1`, function (
            data,
            status
        ) {
            console.log(status);
            console.log(data);

            $("#location").text(data.graphql.hashtag.name);
            //$("#slug").text(data.graphql.hashtag.slug);
            $("#count").text(data.graphql.hashtag.edge_hashtag_to_media.count);

            var imgUrl =
                data.graphql.hashtag.edge_hashtag_to_top_posts.edges[0].node
                    .display_url;
            //$("#post").attr("src", imgUrl);
            for (node in data.graphql.hashtag.edge_hashtag_to_top_posts.edges) {
                var post = data.graphql.hashtag.edge_hashtag_to_top_posts.edges[node];
                console.log(post.node.display_url);
                var row = `<div class="col-4" style="padding:30px">
                            <img height="300" width="300" src="${post.node.display_url}" alt="">
                            <div class="row">
                                <div class="col">comment:${post.node.edge_media_to_comment.count}</div>   
                                <div class="col">like:${post.node.edge_liked_by.count}</div> 
                            </div>
                            <div class="row">
                                <div class="col">Caption:${post.node.edge_media_to_caption.edges[0].node.text}</div> 
                            </div>
                        </div>`;
                $("#posts").append(row);
            }
        });
    }
});



