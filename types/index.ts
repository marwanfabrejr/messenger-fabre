import ConfirmModal from '@/app/conversations/[conversationId]/components/ConfirmModal'
import { Conversation, Message, User } from '@prisma/client'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'
import { IconType } from 'react-icons'

export interface InputProps {
  label: string
  id: string
  type?: string
  required?: boolean
  register: UseFormRegister<FieldValues>
  errors: FieldErrors
  disabled?: boolean
}

export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined
  fullWidth?: boolean
  children?: React.ReactNode
  onClick?: () => void
  secondary?: boolean
  danger?: boolean
  disabled?: boolean
}

export interface AuthSocialButtonProps {
  icon: IconType
  onClick: () => void
}

export interface ChildrenInterface {
  children: React.ReactNode
}

export interface ItemsProps {
  label: string
  href: string
  icon: any
  active?: boolean
  onClick?: () => void
}

export interface DesktopSidebarProps {
  currentUser: User
}

export interface AvatarProps {
  user?: User
}

export interface UserListProps {
  items: User[]
}

export interface UserBoxProps {
  data: User
}

export type FullMessageType = Message & {
  sender: User
  seen: User[]
}

export type FullConversationType = Conversation & {
  users: User[]
  messages: FullMessageType[]
}

export interface ConversationListProps {
  initialItems: FullConversationType[]
  users: User[]
}

export interface ConversationBoxProps {
  data: FullConversationType
  selected?: boolean
}

export interface ConversationIdProps {
  conversationId: string
}

export interface HeaderProps {
  conversation: Conversation & {
    users: User[]
  }
}

export interface MessageInputProps {
  placeholder?: string
  id: string
  type?: string
  required?: boolean
  register: UseFormRegister<FieldValues>
  errors: FieldErrors
}

export interface BodyProps {
  initialMessages: FullMessageType[]
}

export interface MessageBoxProps {
  isLast?: boolean
  data: FullMessageType
}

export interface ProfileDrawerProps {
  data: Conversation & {
    users: User[]
  }
  isOpen: boolean
  onClose: () => void
}

export interface ModalProps {
  isOpen?: boolean
  onClose: () => void
  children: React.ReactNode
}

export interface ConfirmModalProps {
  isOpen?: boolean
  onClose: () => void
}

export interface SettingModalProps {
  isOpen?: boolean
  onClose: () => void
  currentUser: User
}

export interface GroupChatModalProps {
  isOpen?: boolean
  onClose: () => void
  users: User[]
}

export interface SelectProps {
  label: string
  value?: Record<string, any>
  onChange: (value: Record<string, any>) => void
  options: Record<string, any>[]
  disabled?: boolean
}

export interface AvatarGroupProps {
  users?: User[]
}

export interface ImageModalProps {
  isOpen?: boolean
  onClose: () => void
  src?: string | null
}
