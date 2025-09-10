import React, { useState, useMemo, useEffect } from 'react';
import { DOCTORS, INSURANCES, GENDERS, AVAILABILITY_DAYS } from '../constants';
import { Doctor, Specialty } from '../types';
import { Icon } from '../components/Icon';
import { DoctorCard } from '../components/DoctorCard';
import { DoctorProfile } from '../components/DoctorProfile';
import { AppointmentModal } from '../components/AppointmentModal';
import { Button } from '../components/Button';
import { MapView } from '../components/MapView';
import { Card } from '../components/Card';

type ViewMode = 'list' | 'map';

interface DoctorSearchPageProps {
    initialFilters?: Partial<Record<keyof AppFilters, any>>;
    initialSearchQuery?: string;
}

interface AppFilters {
    specialty: string;
    insurance: string[];
    gender: string;
    availability: string[];
}

const defaultFilters: AppFilters = {
    specialty: '',
    insurance: [],
    gender: '',
    availability: [],
}

export const DoctorSearchPage: React.FC<DoctorSearchPageProps> = ({ initialFilters = {}, initialSearchQuery = '' }) => {
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [activeFilters, setActiveFilters] = useState<AppFilters>({ ...defaultFilters, ...initialFilters });
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>('list');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredDoctors = useMemo(() => {
    return DOCTORS.filter(doctor => {
      const nameOrSpecialtyMatch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) || doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase());
      const specialtyMatch = activeFilters.specialty ? doctor.specialty === activeFilters.specialty : true;
      const genderMatch = activeFilters.gender ? doctor.gender === activeFilters.gender : true;
      const insuranceMatch = activeFilters.insurance.length > 0
        ? activeFilters.insurance.some(ins => doctor.insurances.includes(ins))
        : true;
      const availabilityMatch = activeFilters.availability.length > 0
        ? activeFilters.availability.some(day => doctor.availability.includes(day))
        : true;

      return nameOrSpecialtyMatch && specialtyMatch && genderMatch && insuranceMatch && availabilityMatch;
    });
  }, [searchQuery, activeFilters]);

  const handleFilterChange = <T extends keyof AppFilters>(filterType: T, value: AppFilters[T]) => {
      setActiveFilters(prev => ({ ...prev, [filterType]: value }));
  };
  
  const handleMultiSelectFilter = (filterType: 'insurance' | 'availability', value: string) => {
    const currentValues = activeFilters[filterType].slice();
    const valueIndex = currentValues.indexOf(value);
    if(valueIndex > -1){
        currentValues.splice(valueIndex, 1);
    } else {
        currentValues.push(value);
    }
    handleFilterChange(filterType, currentValues);
  }

  const handleSelectDoctor = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
  };

  const handleBackToSearch = () => {
    setSelectedDoctor(null);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const clearFilters = () => {
    setActiveFilters(defaultFilters);
    setSearchQuery('');
  };
  
  const activeFilterCount = Object.values(activeFilters).reduce((count, value) => {
    if (Array.isArray(value)) return count + value.length;
    if (value) return count + 1;
    return count;
  }, 0) + (searchQuery ? 1 : 0);


  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <aside className="lg:col-span-1">
          <Card className="p-4 sticky top-24">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-white">Filters</h2>
                 {activeFilterCount > 0 && <button onClick={clearFilters} className="text-sm text-cyan-400 hover:text-cyan-300">Clear all</button>}
            </div>

            {/* Specialty */}
            <div className="mb-4">
              <label className="font-semibold text-slate-300 block mb-2">Specialty</label>
              <select 
                  value={activeFilters.specialty}
                  onChange={e => handleFilterChange('specialty', e.target.value)}
                  className="w-full bg-slate-800/50 border border-slate-600/50 rounded-lg p-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500">
                <option value="">All Specialties</option>
                {Object.values(Specialty).map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            {/* Insurance */}
            <div className="mb-4">
                <h3 className="font-semibold text-slate-300 block mb-2">Insurance</h3>
                <div className="space-y-2">
                    {INSURANCES.map(ins => (
                        <label key={ins} className="flex items-center gap-2 text-slate-300 cursor-pointer">
                            <input type="checkbox" checked={activeFilters.insurance.includes(ins)} onChange={() => handleMultiSelectFilter('insurance', ins)} className="form-checkbox bg-slate-700 border-slate-600 text-cyan-500 focus:ring-cyan-500 rounded" />
                            {ins}
                        </label>
                    ))}
                </div>
            </div>
            
            {/* Other filters can be added here */}

          </Card>
        </aside>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {selectedDoctor ? (
            <DoctorProfile doctor={selectedDoctor} onBack={handleBackToSearch} onSchedule={handleOpenModal} />
          ) : (
            <>
              {/* Search and View Toggle */}
              <Card className="p-2 mb-6 flex items-center justify-between">
                  <div className="relative flex-grow">
                      <Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                          type="text"
                          placeholder="Search by doctor's name or specialty..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full bg-transparent pl-10 pr-4 py-2 text-white placeholder-slate-400 focus:outline-none"
                      />
                  </div>
                  <div className="flex items-center gap-1 bg-slate-800/50 p-1 rounded-lg">
                      <Button variant={viewMode === 'list' ? 'secondary' : 'ghost'} className="!p-2" onClick={() => setViewMode('list')}>
                          <Icon name="list" className="w-5 h-5"/>
                      </Button>
                      <Button variant={viewMode === 'map' ? 'secondary' : 'ghost'} className="!p-2" onClick={() => setViewMode('map')}>
                          <Icon name="map-pin" className="w-5 h-5"/>
                      </Button>
                  </div>
              </Card>

              <p className="mb-4 text-slate-400">{filteredDoctors.length} doctors found</p>

              {viewMode === 'list' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
                  {filteredDoctors.map(doctor => (
                    <DoctorCard key={doctor.id} doctor={doctor} onSelect={handleSelectDoctor} />
                  ))}
                </div>
              ) : (
                <MapView doctors={filteredDoctors} onSelectDoctor={handleSelectDoctor}/>
              )}
            </>
          )}
        </div>
      </div>

      {isModalOpen && selectedDoctor && (
        <AppointmentModal doctor={selectedDoctor} onClose={handleCloseModal} />
      )}
    </div>
  );
};