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
 * Mobile-first responsive design
 */
const ActionButton = ({ 
  href, 
  icon: Icon, 
  title, 
  description,
  accent
}: {
  href: string
  icon: React.ComponentType<any>
  title: string
  description: string
  accent: string
}) => {
  return (
    <Link href={href}>
      <div className={`w-full p-5 md:p-6 bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl shadow-sm hover:shadow-lg transition-all duration-200 border border-gray-100 dark:border-gray-700 hover:scale-[1.02] active:scale-[0.98] cursor-pointer`}>
        <div className="flex items-center space-x-4">
          <div className={`flex-shrink-0 w-11 h-11 md:w-12 md:h-12 bg-gradient-to-br ${accent} rounded-xl flex items-center justify-center shadow-sm`}>
            <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>
            <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 mt-0.5">
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
        <div className="flex flex-col flex-1 justify-start items-center px-4 py-6 md:mt-14">
          <div className="w-full max-w-sm md:max-w-md">
            {/* Header Section */}
            <div className="text-center mb-8 md:mb-10">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                ¿Qué quieres hacer hoy?
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg px-2">
                Elige una de las siguientes acciones principales
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 md:space-y-4">
              <ActionButton
                href="/deposit"
                icon={ArrowDownIcon}
                title="Depositar"
                description="Añade fondos a tu cuenta de forma segura"
                accent="from-green-500 to-green-600"
              />
              
              <ActionButton
                href="/swap"
                icon={ArrowRightIcon}
                title="Swap"
                description="Intercambia tokens al mejor precio"
                accent="from-blue-500 to-blue-600"
              />
              
              <ActionButton
                href="/withdraw"
                icon={PaperPlaneIcon}
                title="Enviar"
                description="Transfiere fondos a otras wallets"
                accent="from-purple-500 to-purple-600"
              />
            </div>

            {/* Info Section */}
            <div className="mt-8 md:mt-10 p-4 md:p-5 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800">
              <p className="text-sm md:text-base text-blue-700 dark:text-blue-300 text-center leading-relaxed">
                💡 Todas las operaciones son seguras y están respaldadas por la tecnología blockchain más avanzada
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </PreloadFeatureFlags>
  )
}