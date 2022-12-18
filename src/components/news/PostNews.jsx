import { Editor } from '@tinymce/tinymce-react';
import React, { useRef, useState } from 'react';
import axios from 'axios';
import LoadedImages from './LoadedImages';

const PostNews = () => {
    const [img, setImg] = useState([])
    const editorRef = useRef()
    const [load, setLoad] = useState(false)
    const [images, setImages] = useState('')
    let image = ''

   

    const handleImg = async () => {
        try {
            const data = new FormData()
            for (let i = 0; i < img.length; i++) {
                data.append('post', img[i])
            }
            await axios.post('http://localhost:4000/postimage', data, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }).then(res => image = res)
            setLoad(true)
            setImages((x) => image)
        } catch (error) {
            console.log(error.message);
        }
    }

    const handlePost = () => {
        console.log(editorRef.current.getContent());
    }

    console.log(images.data);

    return (
        <div>
            <Editor
                onInit={(evt, editor) => editorRef.current = editor}
                init={{
                    selector: 'textarea',
                    plugins: ['image', 'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'help', 'wordcount'],
                    toolbar: ['undo redo | blocks | ' +
                        'bold italic backcolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | image'],
                    image_list: [
                        { title: 'My image 1', value: 'https://www.example.com/my1.gif' },
                        { title: 'My image 2', value: 'http://www.moxiecode.com/my2.gif' }
                    ]
                }}
            />
            <input type="file" name='post' multiple='multiple' onChange={(e) => setImg((x) => e.target.files)} />
            <button onClick={handleImg}>Загрузить и получить ссылку</button>
            <button type='button' onClick={handlePost}>Сохранить</button>
            {load && images.data.map((item) => <LoadedImages path={item.path}/>)}
            <div dangerouslySetInnerHTML={{__html:'<p>Hello World, How your wife and childs?</p><p><img src="http://localhost:4000/images/post/16122022-225857_404_13pro_max_8.jpg" alt="" width="308" height="395"></p><h1>This is first blog</h1>'}}></div>
        </div>

    );
};

export default PostNews;