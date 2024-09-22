import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import sanitizeHtml from 'sanitize-html';

export default function QuillEditor({
    label,
    className = "sm:col-span-2",
    onChange,
    value
}) {
    const modules = {
        toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "color", "image"],
            [{ "code-block": true }],
            ["clean"],
        ],
    };
    const formats = [
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "link",
        "indent",
        "image",
        "code-block",
        "color",
    ];

    // Hàm xử lý nội dung trước khi onChange
    const handleChange = (content) => {
        const cleanContent = sanitizeHtml(content, {
            allowedTags: sanitizeHtml.defaults.allowedTags.concat([ 'img' ]),
            allowedAttributes: {
                'span': ['style'],
                'a': [ 'href', 'name', 'target' ],
                'img': [ 'src' ]
            },
            // Lọc các tag HTML rỗng
            exclusiveFilter: (frame) => {
                return !frame.text.trim() && frame.tag === 'p';
            }
        });
        onChange(cleanContent); // Gọi onChange với nội dung đã được lọc
    };

    return (
        <div className={className}>
            <label
                htmlFor="content"
                className="block text-sm font-medium text-gray-100 leading-6 mb-2 dark:text-slate-50"
            >
                {label}
            </label>
            <ReactQuill
                theme="snow"
                value={value}
                onChange={handleChange} // Thay đổi hàm onChange
                modules={modules}
                formats={formats}
            />
        </div>
    )
}
