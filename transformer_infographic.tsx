import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const TransformerInfographic = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-indigo-900 mb-2">Transformer Relationships</h1>
        <p className="text-lg text-indigo-700">UK Amateur Radio Full Licence Study Guide</p>
      </div>

      {/* Core Principle */}
      <Card className="mb-6 bg-yellow-50 border-yellow-400 border-2">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-yellow-900">⚡ Golden Rule: Power is Conserved ⚡</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-xl font-semibold text-yellow-900">
            P<sub>primary</sub> = P<sub>secondary</sub>
          </p>
          <p className="text-center text-lg text-yellow-800 mt-2">
            (in an ideal transformer)
          </p>
        </CardContent>
      </Card>

      {/* Mechanical Analogy */}
      <Card className="mb-6 bg-green-50 border-green-400">
        <CardHeader>
          <CardTitle className="text-xl text-green-900">🔧 The Gear Analogy</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4">
              <div className="text-6xl mb-2">⚙️</div>
              <p className="font-semibold text-green-900">Gear System</p>
              <ul className="text-left mt-2 space-y-1 text-green-800">
                <li>• Gear ratio = turns ratio</li>
                <li>• Speed (RPM) = voltage</li>
                <li>• Torque = current</li>
                <li>• Power conserved</li>
              </ul>
            </div>
            <div className="text-center p-4">
              <div className="text-6xl mb-2">🔄</div>
              <p className="font-semibold text-green-900">Transformer</p>
              <ul className="text-left mt-2 space-y-1 text-green-800">
                <li>• n:1 turns ratio</li>
                <li>• Voltage steps</li>
                <li>• Current steps opposite</li>
                <li>• Power conserved</li>
              </ul>
            </div>
          </div>
          <p className="text-center mt-4 text-green-900 italic">
            Gear up = speed ↑, torque ↓ | Step up voltage = V ↑, I ↓
          </p>
        </CardContent>
      </Card>

      {/* Mathematical Relationships */}
      <Card className="mb-6 bg-blue-50 border-blue-400">
        <CardHeader>
          <CardTitle className="text-xl text-blue-900">📐 The Mathematics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-white p-6 rounded-lg">
            <p className="text-center text-lg mb-4 text-blue-900">
              For a transformer with turns ratio <span className="font-bold">n:1</span> (primary:secondary)
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-blue-100 rounded">
                <p className="text-2xl font-bold text-blue-900 mb-2">Voltage</p>
                <p className="text-xl mb-2">V<sub>s</sub> = V<sub>p</sub> / n</p>
                <p className="text-sm text-blue-700">Scales with turns ratio</p>
                <div className="mt-3 text-lg">
                  <span className="inline-block px-3 py-1 bg-blue-200 rounded">×n</span>
                </div>
              </div>
              <div className="text-center p-4 bg-purple-100 rounded">
                <p className="text-2xl font-bold text-purple-900 mb-2">Current</p>
                <p className="text-xl mb-2">I<sub>s</sub> = I<sub>p</sub> × n</p>
                <p className="text-sm text-purple-700">Inverse to turns ratio</p>
                <div className="mt-3 text-lg">
                  <span className="inline-block px-3 py-1 bg-purple-200 rounded">×(1/n)</span>
                </div>
              </div>
              <div className="text-center p-4 bg-red-100 rounded">
                <p className="text-2xl font-bold text-red-900 mb-2">Impedance</p>
                <p className="text-xl mb-2">Z<sub>s</sub> = Z<sub>p</sub> / n²</p>
                <p className="text-sm text-red-700">Square of turns ratio</p>
                <div className="mt-3 text-lg">
                  <span className="inline-block px-3 py-1 bg-red-200 rounded">×n²</span>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-indigo-100 rounded text-center">
              <p className="text-lg font-semibold text-indigo-900">Why the square for impedance?</p>
              <p className="text-indigo-800 mt-2">Z = V / I, so impedance scales as (×n) / (×1/n) = ×n²</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Comparison Table */}
      <Card className="mb-6 bg-purple-50 border-purple-400">
        <CardHeader>
          <CardTitle className="text-xl text-purple-900">📊 Transformation Table</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-purple-200">
                  <th className="border border-purple-400 p-3 text-purple-900">Quantity</th>
                  <th className="border border-purple-400 p-3 text-purple-900">Primary → Secondary</th>
                  <th className="border border-purple-400 p-3 text-purple-900">Scaling Factor</th>
                  <th className="border border-purple-400 p-3 text-purple-900">Example (10:1)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-purple-300 p-3 font-semibold">Voltage</td>
                  <td className="border border-purple-300 p-3">Divided by n</td>
                  <td className="border border-purple-300 p-3 text-center">÷10</td>
                  <td className="border border-purple-300 p-3">100V → 10V</td>
                </tr>
                <tr className="bg-purple-50">
                  <td className="border border-purple-300 p-3 font-semibold">Current</td>
                  <td className="border border-purple-300 p-3">Multiplied by n</td>
                  <td className="border border-purple-300 p-3 text-center">×10</td>
                  <td className="border border-purple-300 p-3">0.5A → 5A</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-purple-300 p-3 font-semibold">Impedance</td>
                  <td className="border border-purple-300 p-3">Divided by n²</td>
                  <td className="border border-purple-300 p-3 text-center">÷100</td>
                  <td className="border border-purple-300 p-3">200Ω → 2Ω</td>
                </tr>
                <tr className="bg-purple-50">
                  <td className="border border-purple-300 p-3 font-semibold">Power</td>
                  <td className="border border-purple-300 p-3">Unchanged</td>
                  <td className="border border-purple-300 p-3 text-center">×1</td>
                  <td className="border border-purple-300 p-3">50W → 50W</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Problem-Solving Flowchart */}
      <Card className="mb-6 bg-orange-50 border-orange-400">
        <CardHeader>
          <CardTitle className="text-xl text-orange-900">🔍 Problem-Solving Flowchart</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="bg-orange-200 rounded-full w-12 h-12 flex items-center justify-center font-bold text-orange-900">1</div>
              <div className="flex-1 bg-white p-4 rounded shadow">
                <p className="font-semibold text-orange-900">Identify what you know</p>
                <p className="text-sm text-orange-700">Turns ratio? Voltages? Currents? Impedances?</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-orange-200 rounded-full w-12 h-12 flex items-center justify-center font-bold text-orange-900">2</div>
              <div className="flex-1 bg-white p-4 rounded shadow">
                <p className="font-semibold text-orange-900">Check power first</p>
                <p className="text-sm text-orange-700">If you know V and I on one side, calculate P = V × I</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-orange-200 rounded-full w-12 h-12 flex items-center justify-center font-bold text-orange-900">3</div>
              <div className="flex-1 bg-white p-4 rounded shadow">
                <p className="font-semibold text-orange-900">Apply the scaling rules</p>
                <p className="text-sm text-orange-700">V scales ×n, I scales ×(1/n), Z scales ×n²</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-orange-200 rounded-full w-12 h-12 flex items-center justify-center font-bold text-orange-900">4</div>
              <div className="flex-1 bg-white p-4 rounded shadow">
                <p className="font-semibold text-orange-900">Sanity check with power</p>
                <p className="text-sm text-orange-700">Does P<sub>primary</sub> = P<sub>secondary</sub>? If not, recheck!</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Reference Rules of Thumb */}
      <Card className="bg-indigo-50 border-indigo-400">
        <CardHeader>
          <CardTitle className="text-xl text-indigo-900">💡 Rules of Thumb for Spotting Mistakes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <p className="font-semibold text-indigo-900 mb-2">✓ If voltage goes up...</p>
              <ul className="space-y-1 text-indigo-800">
                <li>• Current MUST go down (same factor)</li>
                <li>• Impedance MUST go up (square of factor)</li>
                <li>• Power stays the same</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <p className="font-semibold text-indigo-900 mb-2">✓ For impedance matching...</p>
              <ul className="space-y-1 text-indigo-800">
                <li>• Need ratio of 9:1? Use 3:1 turns</li>
                <li>• Need ratio of 4:1? Use 2:1 turns</li>
                <li>• Take square root of impedance ratio</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <p className="font-semibold text-indigo-900 mb-2">✓ Step-up transformer...</p>
              <ul className="space-y-1 text-indigo-800">
                <li>• Secondary has MORE turns</li>
                <li>• Voltage increases</li>
                <li>• Current decreases</li>
                <li>• Reflects higher impedance</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <p className="font-semibold text-indigo-900 mb-2">✓ Common amateur uses...</p>
              <ul className="space-y-1 text-indigo-800">
                <li>• Antenna matching (50Ω ↔ various)</li>
                <li>• Baluns (balanced ↔ unbalanced)</li>
                <li>• Power supply isolation</li>
                <li>• RF coupling circuits</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8 text-center text-sm text-indigo-700">
        <p>Remember: Power conservation is your friend. Use it to check your work!</p>
      </div>
    </div>
  );
};

export default TransformerInfographic;