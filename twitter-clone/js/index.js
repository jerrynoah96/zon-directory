const postBtn = document.querySelector('.new-post');
const postSection = document.querySelector('.post-section');
const closePost = document.querySelector('.close-post');



postBtn.addEventListener('click', (e)=>{
    postSection.style.display = 'block';
})

closePost.addEventListener('click', (e)=> {
    postSection.style.display = 'none';
})


// add Post function

const addPostForm = document.getElementById('newPostForm');
addPostForm.addEventListener('submit', (e)=> {
    e.preventDefault();
    const postList = document.querySelector('.container2');
    const newPostContent = document.querySelector('.post-content');
    const newPostHeading = document.querySelector('.post-heading');

    if(newPostContent !== '' && newPostHeading !== ''){
        //create PostDiv
        var postDiv = document.createElement('div');
        postDiv.classList.add('container', 'bg-white');

        //create horizonatal line
        var line = document.createElement('hr');
        

        //create Post Header element
        var postHeading = document.createElement('header');
        postHeading.classList.add('mt-1')
        var h5 = document.createElement('h5');

        //create Post Content
        var postContent = document.createElement('p');
        //create see more text]
        var seeMore = document.createElement('a');

        //create span that contains like,unlike,comment,viewBlog == lucv
        var lucv = document.createElement('span');
        //create likebtn
        var likeBtn = document.createElement('button');
        likeBtn.classList.add('fa', 'fa-thumbs-up');
        likeBtn.setAttribute('id', 'likebtn');
        
        //input element below likebtn in html
        var input1= document.createElement('input');
        input1.setAttribute('id', 'input1');
        input1.setAttribute('type', 'number')
        input1.setAttribute('value', '0');
        input1.setAttribute('name', '');

        //create dislikebtn
        var disLikeBtn = document.createElement('button');
        disLikeBtn.classList.add('fa', 'fa-thumbs-down');
        disLikeBtn.setAttribute('id', 'dislikebtn');

        //input element below dislikebtn in html
        var input2= document.createElement('input');
        input2.setAttribute('id', 'input2');
        input2.setAttribute('type', 'number')
        input2.setAttribute('value', '0');
        input2.setAttribute('name', '');

        //create comment icon
        var commentIcon = document.createElement('i');
        commentIcon.classList.add('fa', 'fa-comment', 'ml-3');

        //create viewBlogPost button
        var viewBlogBtn = document.createElement('button');
        viewBlogBtn.setAttribute('type', 'button');
        viewBlogBtn.classList.add('btn', 'btn-light', 'text-primary');
        viewBlogBtn.textContent = 'View Blog Post';

        //SET POST CONTENT
        //post heading
        h5.textContent = newPostHeading.value;
        //post content
        postContent.textContent = newPostContent.value;
       
        
       
        postList.appendChild(postDiv);
        postDiv.appendChild(line);
        line.appendChild(postHeading);

        postHeading.appendChild(h5);
        line.appendChild(postContent);
        line.appendChild(lucv);
        lucv.appendChild(likeBtn);
        lucv.appendChild(input1);
        lucv.appendChild(disLikeBtn);
        lucv.appendChild(input2);
        lucv.appendChild(commentIcon);
        lucv.appendChild(viewBlogBtn);


        postSection.style.display = 'none';

        newPostContent.value = '';
        newPostHeading.value = '';





        
    }
})