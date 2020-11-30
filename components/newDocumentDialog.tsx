import React, { useState } from 'react'
import { Dialog, TextInput } from 'evergreen-ui'

const NewDocDialog = ({ onNewDoc, close, ...props }) => {
  const [name, setName] = useState('')
  const [saving, setSaving] = useState(false)

  const handleNewDocument = async () => {
    setSaving(true)
    await onNewDoc(name)
    setSaving(false)
    setName('')
    close()
  }

  return (
    <Dialog
      {...props}
      title="New Document"
      confirmLabel="create"
      intent="success"
      onConfirm={handleNewDocument}
      isConfirmLoading={saving}
      onCancel={close}
      onCloseComplete={close}
    >
      <TextInput value={name} onChange={(e) => setName(e.target.value)} placeholder="doc name" />
    </Dialog>
  )
}

export default NewDocDialog
