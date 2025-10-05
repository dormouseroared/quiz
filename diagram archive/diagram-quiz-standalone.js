// Standalone tool to create quiz data structures

class DiagramQuizEditor {
    constructor(containerId) {
        this.container = document.getElementById(containerId)
        this.image = null
        this.imagePath = null
        this.boxes = []
        this.dragging = false
        this.dragStart = null
        this.currentBox = null
        this.editingLabel = null
        this.quizTitle = ''
        this.obfuscationLevel = 0.7 // 0-1, 0=transparent, 1=opaque

        this.init()
    }

    init() {
        this.render()
        this.attachEventListeners()
    }

    render() {
        this.container.innerHTML = `
      <div style="max-width: 1400px; margin: 0 auto; padding: 24px; background: #f9fafb; border-radius: 8px;">
        <h2 style="font-size: 24px; font-weight: bold; margin-bottom: 16px; color: #1f2937;">Diagram Quiz Editor</h2>
        
        <div id="upload-area" style="border: 4px dashed #d1d5db; border-radius: 8px; padding: 48px; text-align: center; background: white; cursor: pointer;">
          <div style="font-size: 48px; color: #9ca3af; margin-bottom: 16px;">📤</div>
          <span style="color: #2563eb; font-weight: 600; font-size: 18px;">Upload a diagram image</span>
          <input type="file" id="image-upload" accept="image/*" style="display: none;">
          <p style="margin-top: 16px; color: #6b7280; font-size: 14px;">Upload, define boxes, and export quiz data</p>
        </div>
        
        <div id="setup-area" style="display: none;">
          <div style="background: #dbeafe; border: 1px solid #93c5fd; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
            <p style="font-size: 14px; color: #1f2937;">
              <strong>Setup:</strong> Click and drag to create boxes. Click edit icon to label. Export when done.
            </p>
          </div>
          
          <div style="margin-bottom: 16px;">
            <label style="display: block; font-size: 14px; font-weight: 500; color: #374151; margin-bottom: 8px;">Quiz Title:</label>
            <input type="text" id="quiz-title" placeholder="Enter quiz title" 
              style="width: 100%; max-width: 500px; padding: 8px; border: 1px solid #d1d5db; border-radius: 4px;">
          </div>
          
          <div style="margin-bottom: 16px;">
            <label style="display: block; font-size: 14px; font-weight: 500; color: #374151; margin-bottom: 8px;">
              Image Filename (saved to diagramQuizImages/):
            </label>
            <input type="text" id="image-filename" placeholder="diagram1.png" 
              style="width: 100%; max-width: 500px; padding: 8px; border: 1px solid #d1d5db; border-radius: 4px;">
          </div>
          
          <div style="margin-bottom: 16px;">
            <label style="display: block; font-size: 14px; font-weight: 500; color: #374151; margin-bottom: 8px;">
              Obfuscation Level: <span id="obfuscation-value">70%</span>
            </label>
            <input type="range" id="obfuscation-slider" min="0" max="100" value="70" 
              style="width: 100%; max-width: 500px;">
            <p style="font-size: 12px; color: #6b7280; margin-top: 4px;">
              0% = transparent (shows original), 100% = completely hidden
            </p>
          </div>
          
          <div style="display: flex; gap: 8px; margin-bottom: 16px;">
            <button id="export-btn" style="padding: 8px 16px; background: #16a34a; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: 500;">
              💾 Export Quiz Data (<span id="box-count">0</span> boxes)
            </button>
            <button id="copy-btn" style="padding: 8px 16px; background: #2563eb; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: 500;">
              📋 Copy to Clipboard
            </button>
          </div>
          
          <div style="display: flex; gap: 24px;">
            <div style="flex: 1; position: relative; background: white; padding: 16px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); cursor: crosshair; user-select: none;">
              <img id="diagram-image" style="max-width: 100%; height: auto; pointer-events: none; display: block;">
              <div id="boxes-container" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none;"></div>
            </div>
            
            <div style="width: 320px;">
              <div style="background: white; padding: 16px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin-bottom: 16px;">
                <h3 style="font-weight: bold; color: #374151; margin-bottom: 12px;">Defined Boxes:</h3>
                <div id="boxes-list" style="min-height: 50px;">
                  <p style="font-size: 14px; color: #6b7280; font-style: italic;">No boxes yet. Drag on the image.</p>
                </div>
              </div>
              
              <div id="edit-label-panel" style="display: none; background: white; padding: 16px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); border: 2px solid #3b82f6;">
                <h3 style="font-weight: bold; color: #374151; margin-bottom: 8px;">Edit Label:</h3>
                <input type="text" id="label-input" placeholder="Enter label text" 
                  style="width: 100%; padding: 8px; border: 1px solid #d1d5db; border-radius: 4px; margin-bottom: 8px;">
                <div style="display: flex; gap: 8px;">
                  <button id="save-label-btn" style="flex: 1; padding: 8px; background: #16a34a; color: white; border: none; border-radius: 4px; cursor: pointer;">Save</button>
                  <button id="cancel-label-btn" style="flex: 1; padding: 8px; background: #6b7280; color: white; border: none; border-radius: 4px; cursor: pointer;">Cancel</button>
                </div>
              </div>
              
              <div style="background: #fef3c7; border: 1px solid #fcd34d; border-radius: 8px; padding: 12px; margin-top: 16px;">
                <p style="font-weight: 600; margin-bottom: 4px; font-size: 14px;">Export Format:</p>
                <p style="font-size: 12px; color: #78716c;">
                  Exports JSON with image path (not embedded), box positions, and labels.
                  Save the image separately in diagramQuizImages/ folder.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
    }

    attachEventListeners() {
        const uploadArea = document.getElementById('upload-area')
        const imageUpload = document.getElementById('image-upload')

        uploadArea.addEventListener('click', () => imageUpload.click())
        imageUpload.addEventListener('change', (e) => this.handleImageUpload(e))

        document.getElementById('obfuscation-slider')?.addEventListener('input', (e) => {
            this.obfuscationLevel = e.target.value / 100
            document.getElementById('obfuscation-value').textContent = `${e.target.value}%`
            this.updateBoxesDisplay()
        })

        document.getElementById('export-btn')?.addEventListener('click', () => this.exportQuizData())
        document.getElementById('copy-btn')?.addEventListener('click', () => this.copyToClipboard())
    }

    handleImageUpload(e) {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = (event) => {
                this.image = event.target.result
                document.getElementById('upload-area').style.display = 'none'
                document.getElementById('setup-area').style.display = 'block'

                const img = document.getElementById('diagram-image')
                img.src = this.image
                img.onload = () => this.setupCanvas()

                // Set default filename
                document.getElementById('image-filename').value = file.name
            }
            reader.readAsDataURL(file)
        }
    }

    setupCanvas() {
        const container = document.getElementById('diagram-image').parentElement

        container.addEventListener('mousedown', (e) => this.handleMouseDown(e))
        container.addEventListener('mousemove', (e) => this.handleMouseMove(e))
        container.addEventListener('mouseup', () => this.handleMouseUp())
        container.addEventListener('mouseleave', () => this.handleMouseUp())
    }

    handleMouseDown(e) {
        if (this.editingLabel !== null) return

        const rect = e.currentTarget.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        this.dragging = true
        this.dragStart = { x, y }
        this.currentBox = { x, y, width: 0, height: 0 }
    }

    handleMouseMove(e) {
        if (!this.dragging) return

        const rect = e.currentTarget.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        this.currentBox = {
            x: Math.min(this.dragStart.x, x),
            y: Math.min(this.dragStart.y, y),
            width: Math.abs(x - this.dragStart.x),
            height: Math.abs(y - this.dragStart.y)
        }

        this.updateBoxesDisplay()
    }

    handleMouseUp() {
        if (!this.dragging) return

        if (this.currentBox && this.currentBox.width > 20 && this.currentBox.height > 20) {
            const newBox = {
                id: Date.now(),
                ...this.currentBox,
                label: `Label ${this.boxes.length + 1}`
            }
            this.boxes.push(newBox)
            this.updateBoxesList()
        }

        this.dragging = false
        this.dragStart = null
        this.currentBox = null
        this.updateBoxesDisplay()

        document.getElementById('box-count').textContent = this.boxes.length
    }

    updateBoxesDisplay() {
        const container = document.getElementById('boxes-container')
        const img = document.getElementById('diagram-image')
        const imgRect = img.getBoundingClientRect()
        const parentRect = container.parentElement.getBoundingClientRect()

        container.innerHTML = ''
        container.style.top = (img.offsetTop) + 'px'
        container.style.left = (img.offsetLeft) + 'px'
        container.style.width = img.offsetWidth + 'px'
        container.style.height = img.offsetHeight + 'px'

        // Draw saved boxes
        this.boxes.forEach(box => {
            const div = this.createBoxElement(box, false)
            container.appendChild(div)
        })

        // Draw current box being dragged
        if (this.currentBox) {
            const div = this.createBoxElement(this.currentBox, true)
            container.appendChild(div)
        }
    }

    createBoxElement(box, isDraft) {
        const div = document.createElement('div')
        div.style.cssText = `
      position: absolute;
      left: ${box.x}px;
      top: ${box.y}px;
      width: ${box.width}px;
      height: ${box.height}px;
      border: 2px ${isDraft ? 'dashed' : 'solid'} #a855f7;
      background: rgba(168, 85, 247, ${isDraft ? 0.1 : this.obfuscationLevel});
      border-radius: 4px;
      pointer-events: ${isDraft ? 'none' : 'auto'};
    `

        if (!isDraft && box.label) {
            const controls = document.createElement('div')
            controls.style.cssText = `
        position: absolute;
        top: -32px;
        left: 0;
        display: flex;
        gap: 4px;
        background: white;
        border-radius: 4px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.2);
        padding: 4px;
      `

            const editBtn = document.createElement('button')
            editBtn.textContent = '✏️'
            editBtn.style.cssText = 'padding: 4px 8px; border: none; background: #eff6ff; cursor: pointer; border-radius: 3px;'
            editBtn.addEventListener('click', (e) => {
                e.stopPropagation()
                this.startEditLabel(box)
            })

            const deleteBtn = document.createElement('button')
            deleteBtn.textContent = '❌'
            deleteBtn.style.cssText = 'padding: 4px 8px; border: none; background: #fee2e2; cursor: pointer; border-radius: 3px;'
            deleteBtn.addEventListener('click', (e) => {
                e.stopPropagation()
                this.removeBox(box.id)
            })

            controls.appendChild(editBtn)
            controls.appendChild(deleteBtn)
            div.appendChild(controls)

            const label = document.createElement('div')
            label.textContent = box.label
            label.style.cssText = 'font-size: 12px; font-weight: 600; color: #7c3aed; padding: 4px;'
            div.appendChild(label)
        }

        return div
    }

    removeBox(id) {
        this.boxes = this.boxes.filter(b => b.id !== id)
        this.updateBoxesDisplay()
        this.updateBoxesList()
        document.getElementById('box-count').textContent = this.boxes.length
    }

    startEditLabel(box) {
        this.editingLabel = box.id
        const panel = document.getElementById('edit-label-panel')
        const input = document.getElementById('label-input')

        panel.style.display = 'block'
        input.value = box.label
        input.focus()

        const saveBtn = document.getElementById('save-label-btn')
        const cancelBtn = document.getElementById('cancel-label-btn')

        const save = () => this.saveLabel()
        const cancel = () => this.cancelEditLabel()

        saveBtn.onclick = save
        cancelBtn.onclick = cancel
        input.onkeypress = (e) => { if (e.key === 'Enter') save() }
    }

    saveLabel() {
        const input = document.getElementById('label-input')
        if (this.editingLabel && input.value.trim()) {
            this.boxes = this.boxes.map(b =>
                b.id === this.editingLabel ? { ...b, label: input.value.trim() } : b
            )
            this.updateBoxesDisplay()
            this.updateBoxesList()
        }
        this.cancelEditLabel()
    }

    cancelEditLabel() {
        this.editingLabel = null
        document.getElementById('edit-label-panel').style.display = 'none'
        document.getElementById('label-input').value = ''
    }

    updateBoxesList() {
        const list = document.getElementById('boxes-list')
        if (this.boxes.length === 0) {
            list.innerHTML = '<p style="font-size: 14px; color: #6b7280; font-style: italic;">No boxes yet. Drag on the image.</p>'
        } else {
            list.innerHTML = this.boxes.map(box =>
                `<div style="padding: 8px; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 4px; margin-bottom: 8px; font-size: 14px;">${box.label}</div>`
            ).join('')
        }
    }

    exportQuizData() {
        const title = document.getElementById('quiz-title').value || 'Untitled Quiz'
        const filename = document.getElementById('image-filename').value || 'diagram.png'

        const quizData = {
            title: title,
            imagePath: `diagramQuizImages/${filename}`,
            obfuscationLevel: this.obfuscationLevel,
            boxes: this.boxes.map(b => ({
                id: b.id,
                x: b.x,
                y: b.y,
                width: b.width,
                height: b.height,
                label: b.label
            })),
            createdAt: new Date().toISOString()
        }

        const dataStr = JSON.stringify(quizData, null, 2)
        const dataBlob = new Blob([dataStr], { type: 'application/json' })
        const url = URL.createObjectURL(dataBlob)
        const link = document.createElement('a')
        link.href = url
        link.download = `${title.replace(/\s+/g, '_')}.json`
        link.click()
        URL.revokeObjectURL(url)

        alert(`Quiz data exported!\n\nRemember to save the image as:\n${quizData.imagePath}`)
    }

    copyToClipboard() {
        const title = document.getElementById('quiz-title').value || 'Untitled Quiz'
        const filename = document.getElementById('image-filename').value || 'diagram.png'

        const quizData = {
            title: title,
            imagePath: `diagramQuizImages/${filename}`,
            obfuscationLevel: this.obfuscationLevel,
            boxes: this.boxes.map(b => ({
                id: b.id,
                x: b.x,
                y: b.y,
                width: b.width,
                height: b.height,
                label: b.label
            })),
            createdAt: new Date().toISOString()
        }

        navigator.clipboard.writeText(JSON.stringify(quizData, null, 2))
        alert('Quiz data copied to clipboard!')
    }
}