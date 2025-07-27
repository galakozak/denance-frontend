"use client"

import Link from "next/link"
import { 
  ArrowDownIcon, 
  ArrowRightIcon, 
  PaperPlaneIcon 
} from "@radix-ui/react-icons"

import Layout from "@src/components/Layout"
import { PreloadFeatureFlags } from "@src/components/PreloadFeatureFlags"

/**
 * Main action button component for the homepage
 * Inspired by Lemon Cash design with large, clear buttons
 */
const ActionButton = ({ 
  href, 
  icon: Icon, 
  title, 
  description 
}: {
  href: string
  icon: React.ComponentType<any>
  title: string
  description: string
}) => {
  return (
    <Link href={href}>
      <div className="w-full p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100 dark:border-gray-700 hover:scale-105 cursor-pointer">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center">
            <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {description}
            </p>
          </div>
          <ArrowRightIcon className="w-5 h-5 text-gray-400 dark:text-gray-500" />
        </div>
      </div>
    </Link>
  )
}

/**
 * Main homepage component inspired by Lemon Cash
 * Mobile-first design with three primary actions
 */
export default function HomePage() {
  return (
    <PreloadFeatureFlags>
      <Layout>
        <div className="flex flex-col flex-1 justify-start items-center mt-5 md:mt-14">
          <div className="w-full max-w-md px-4 md:max-w-lg">
            {/* Header Section */}
            <div className="text-center mb-8">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                ¿Qué quieres hacer hoy?
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg">
                Elige una de las siguientes acciones principales
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <ActionButton
                href="/deposit"
                icon={ArrowDownIcon}
                title="Depositar"
                description="Añade fondos a tu cuenta de forma segura"
              />
              
              <ActionButton
                href="/swap"
                icon={ArrowRightIcon}
                title="Swap"
                description="Intercambia tokens al mejor precio"
              />
              
              <ActionButton
                href="/withdraw"
                icon={PaperPlaneIcon}
                title="Enviar"
                description="Transfiere fondos a otras wallets"
              />
            </div>

            {/* Info Section */}
            <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800">
              <p className="text-sm text-blue-700 dark:text-blue-300 text-center">
                💡 Todas las operaciones son seguras y están respaldadas por la tecnología blockchain más avanzada
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </PreloadFeatureFlags>
  )
}