import React, { PureComponent } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import '../styles/quill.editor.css'

class QuillEditor extends PureComponent {
  constructor(props) {
    super(props)
    this.state = { text: '' }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
    this.setState({ text: value })
  }

  render() {
    return (
      <ReactQuill
        value={this.state.text}
        onChange={(value, delta, source) => {
          if (source === 'user') {
            this.handleChange(value)
          }
        }}
        modules={QuillEditor.modules}
        formats={QuillEditor.formats}
      />
    )
  }
}

QuillEditor.modules = {
  toolbar: {
    container: [
      [{ font: [] }], [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ color: [] }, { background: [] }],
      [{ script: 'sub' }, { script: 'super' }],
      [{ header: '1' }, { header: '2' }, 'blockquote', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      [{ direction: 'rtl' }, { align: [] }],
      ['link', 'image', 'formula', 'clean']
    ],
    handlers: {
      link: function (value) {
        if (value) {
          let range = this.quill.getSelection()
          let prefix = 'http://'
          let preview = ''

          if (range !== null && range.length > 0) {
            preview = this.quill.getText(range)
            if (preview.toString().toLowerCase().includes('http')) {
              prefix = ''
            }
          }

          let tooltip = this.quill.theme.tooltip
          tooltip.edit('link', `${prefix}${preview}`)
        } else {
          this.quill.format('link', false)
        }
      }
    }
  }
}

QuillEditor.formats = [
  'font', 'size',
  'bold', 'italic', 'underline', 'strike',
  'blockquote', 'code-block', 'header', 'script',
  'list', 'bullet', 'indent', 'direction', 'align',
  'color', 'background',
  'link', 'image', 'formula'
]

export default QuillEditor
