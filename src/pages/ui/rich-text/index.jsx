import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import draftToMarkdown from 'draftjs-to-markdown';
import './index.less';

export default class RichText extends Component {
    state = {
        editorState: EditorState.createEmpty(),
        editorContent: '',
    };
    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };
    onEditorChange = (editorContent) => {
        this.setState({
            editorContent,
        });
    };
    // 图片上传预览
    imageUploadCallBack = file => new Promise(
        (resolve, reject) => {
            const xhr = new XMLHttpRequest(); // eslint-disable-line no-undef
            xhr.open('POST', 'https://api.imgur.com/3/image');
            xhr.setRequestHeader('Authorization', 'Client-ID 8d26ccd12712fca');
            const data = new FormData(); // eslint-disable-line no-undef
            data.append('image', file);
            xhr.send(data);
            xhr.addEventListener('load', () => {
                const response = JSON.parse(xhr.responseText);
                resolve(response);
            });
            xhr.addEventListener('error', () => {
                const error = JSON.parse(xhr.responseText);
                reject(error);
            });
        }
    );
    render() {
        const { editorState, editorContent } = this.state;
        return (
            <Row gutter={16}>
                <Col>
                    <Card title="富文本编辑器">
                        <Editor
                            editorState={editorState}
                            wrapperClassName="editor-wrapper"
                            editorClassName="editor"
                            onEditorStateChange={this.onEditorStateChange}
                            onContentStateChange={this.onEditorChange}
                            toolbar={{
                                history: { inDropdown: true },
                                inline: { inDropdown: false },
                                list: { inDropdown: true },
                                textAlign: { inDropdown: true },
                                image: { uploadCallback: this.imageUploadCallBack },
                            }}
                            spellCheck
                            localization={{ locale: 'zh' }}
                            mention={{
                                separator: ' ',
                                trigger: '@',
                                caseSensitive: true,
                                // 键入@表示提示，键入＃标签
                                suggestions: [
                                    { text: 'A', value: 'AB', url: 'href-a' },
                                    { text: 'AB', value: 'ABC', url: 'href-ab' },
                                    { text: 'ABC', value: 'ABCD', url: 'href-abc' },
                                    { text: 'ABCD', value: 'ABCDDDD', url: 'href-abcd' },
                                    { text: 'ABCDE', value: 'ABCDE', url: 'href-abcde' },
                                    { text: 'ABCDEF', value: 'ABCDEF', url: 'href-abcdef' },
                                    { text: 'ABCDEFG', value: 'ABCDEFG', url: 'href-abcdefg' },
                                ],
                            }}
                        />
                    </Card>
                </Col>
                <Col md={8} className="card-box">
                    <Card title="同步转换HTML">
                        <pre className="editor-pre">
                            {draftToHtml(editorContent)}
                        </pre>
                    </Card>
                </Col>
                <Col md={8} className="card-box">
                    <Card title="同步转换MarkDown" bordered={false}>
                        <pre className="editor-pre">
                            {draftToMarkdown(editorContent)}
                        </pre>
                    </Card>
                </Col>
                <Col md={8} className="card-box">
                    <Card title="同步转换JSON" bordered={false}>
                        <pre className="editor-pre">
                            {JSON.stringify(editorContent)}
                        </pre>
                    </Card>
                </Col>
            </Row>
        );
    }
}
