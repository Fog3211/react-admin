import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import draftToMarkdown from 'draftjs-to-markdown';

export default class RichText extends Component {
    state = {
        editorState: EditorState.createEmpty(),
    };
    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };
    render() {
        const { editorState } = this.state;
        return (
            <div>
                <Editor
                    editorState={editorState}
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    onEditorStateChange={this.onEditorStateChange}
                />
                <textarea
                    disabled
                    value={draftToHtml(
                        convertToRaw(editorState.getCurrentContent())
                    )}
                />
            </div>
        );
    }
}
